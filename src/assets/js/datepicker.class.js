import '../style/datepicker.class.scss';
class DatePicker {
    constructor(input,date=new Date()) {
    	let $wrap = document.createElement('div');
    	$wrap.className = 'ui-datepicker-wrapper';
    	this.$input = document.querySelector(input);
    	this.value = this.format(date);
    	this.$wrap = $wrap;
    	document.body.appendChild(this.$wrap);
    	this.reset(date.getFullYear(),date.getMonth()+1);
    	this.bindEvent();   	
    };
    buildUi(year, month){
    	let html = '<div class="ui-datepicker-header">'+
			'<span class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</span>'+
			'<span class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</span>'+
			`<span class="ui-datepicker-curr-month">${year}-${month}</span>`+
		'</div>'+
		'<div class="ui-datepicker-body">'+
			'<table>'+
				'<thead>'+
					'<tr>'+
						'<th>日</th>'+
						'<th>一</th>'+
						'<th>二</th>'+
						'<th>三</th>'+
						'<th>四</th>'+
						'<th>五</th>'+
						'<th>六</th>'+
					'</tr>'+
				'</thead>'+
				'<tbody>';
		for(let [i,line] of this.days.entries()){
			html+='<tr>'
			for(let [j,day] of line.entries()){
				if(this.isChosen(day)){
					html+=`<td class="is-chosen" data-date="${day.date}">${day.showDate}</td>`
				}else{
					html+=`<td data-date="${day.date}">${day.showDate}</td>`
				}				
			}
			html+='</tr>'
		}
		html+='</tbody></table></div><div class="ui-datepicker-select-box"><select class="ui-datepicker-select-year">'
		for(let i=-50;i<50;i++){
			if(i==0){
				html+=`<option value="${year+i}" selected>${year+i}</option>`
			}else{
				html+=`<option value="${year+i}">${year+i}</option>`
			}			
		}
		html+='</select><select class="ui-datepicker-select-month">';
		for(let i=1;i<13;i++){
			if(i==month){
				html+=`<option value="${i}" selected>${i}</option>`
			}else{
				html+=`<option value="${i}">${i}</option>`
			}
		}
		html+='</select><div class="ui-datepicker-btn-box"><div class="ui-datepicker-select-btn ui-datepicker-sure-select">确定</div><div class="ui-datepicker-select-btn ui-datepicker-cancel-select">取消</div></div></div>';
		// console.log(html);
		this.$wrap.innerHTML = html;
        
    };
    isChosen(day){
    	let [year,month,date] = this.$input.value.split('-');
    	return year==this.year&&month==day.month&&date==day.showDate;
    };
    reset(year = new Date().getFullYear(), month = new Date().getMonth() + 1){
    	let ret = [];
        let firstDay = new Date(year, month - 1, 1),
            lastDayOfLastMonth = new Date(year, month - 1, 0),
            lastDay = new Date(year, month, 0);
        let firstDayWeekDay = firstDay.getDay(),
            lastDateOfLastMonth = lastDayOfLastMonth.getDate(),
            lastDate = lastDay.getDate();
        let preMonthDayCount = firstDayWeekDay;
        let thisDate=-7;
        this.year = firstDay.getFullYear();
        this.month = firstDay.getMonth()+1;
        for (let i = 0;thisDate <= lastDate; i++) {
            ret[i] = [];
            for (let j = 0; j < 7; j++) {
                thisDate = (i * 7 + j) + 1 - preMonthDayCount;
                let showDate = thisDate,
                    thisMonth = month;               
                if (thisDate <= 0) {
                    showDate += lastDateOfLastMonth;
                    thisMonth--;
                } else if (thisDate > lastDate) {
                    showDate -= lastDate;
                    thisMonth++;
                }
                if (thisMonth == 0) thisMonth = 12;
                if (thisMonth == 13) thisMonth = 1;
                let isChosen = false;
                ret[i][j] = {
                    month: thisMonth,
                    date: thisDate,
                    showDate: showDate,
                }
            }
        }
        this.days = ret;
        this.buildUi(this.year,this.month);
    };
    bindEvent(){
    	this.isOpen = false;
    	this.$input.addEventListener('click',()=>{
    		if(this.isOpen){
    			this.$wrap.classList.remove('ui-datepicker-wrapper-show');
    		}else{
    			this.$wrap.classList.add('ui-datepicker-wrapper-show');
    			let left = this.$input.offsetLeft,
    				top = this.$input.offsetTop,
    				height = this.$input.offsetHeight;
    			this.$wrap.style.left = left + 'px';
    			this.$wrap.style.top = top+height+'px';
    			let [year,month,date] = this.$input.value.split('-')
    			this.reset(year,month);
    		}
    		this.isOpen = !this.isOpen;
    	},false);
    	this.$wrap.addEventListener('click',(e)=>{
    		if(e.target.classList.contains('ui-datepicker-prev-btn')){
    			this.addMonth(-1)
    		}
    		if(e.target.classList.contains('ui-datepicker-next-btn')){
    			this.addMonth(1);
    		}
    		if(e.target.classList.contains('ui-datepicker-curr-month')){
    			this.showQuickChooseTime(this.year,this.month);
    		}
    		if(e.target.tagName.toLowerCase()==='td'){
    			let value = this.format(new Date(this.year,this.month-1,e.target.dataset.date));
    			this.value=value;
    			this.$wrap.classList.remove('ui-datepicker-wrapper-show');
    			this.isOpen = false;
    		}
            if(e.target.classList.contains('ui-datepicker-sure-select')){
                let year = this.$wrap.querySelector('.ui-datepicker-select-year').value;
                let month = this.$wrap.querySelector('.ui-datepicker-select-month').value;
                this.reset(year,month);
            }
            if(e.target.classList.contains('ui-datepicker-cancel-select')){
                this.showQuickChooseTime(this.year,this.month);
            }
    	},false)
    };
    addMonth(num){
    	this.reset(this.year,this.month+num);
    	// console.log(num);
    };
    format(date){
    	function add0(num){
    		if(num<10){
    			return `0${num}`
    		}
    		return num;
    	}
    	return `${date.getFullYear()}-${add0(date.getMonth()+1)}-${add0(date.getDate())}`
    };
    showQuickChooseTime(){
        let $selectBox = this.$wrap.querySelector('.ui-datepicker-select-box');
        $selectBox.classList.toggle('ui-datepicker-show-select-box');
    }
}

export default DatePicker;
