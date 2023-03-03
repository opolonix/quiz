class Quiz{
    constructor(dir) {
		this.dir = dir;
        this.start_page = 0
	}
    set data(data) {
        this.pages_data = data
    }
    set startPage(page) {
        this.start_page = page
    }
    load() {
        var result = ''
        var page_data = this.pages_data[0][this.start_page]
        for (let i in page_data){
            // result += i
            var item_data = page_data[i]
            if (item_data['type'] == 'text'){
                result += `<div class="${item_data['text-type']}">${item_data['content']}</div>`
            }
            if (item_data['type'] == 'btns'){
                var btns = ''
                for (let btn in item_data['btns']){
                    btns += '<button class="btn">' + item_data['btns'][btn]['content'] + '</button>'
                }
                result += `<div class="btns">${btns}</div>`
            }
        }
        this.dir.innerHTML = result
        // console.dir(this.dir);
    }
}