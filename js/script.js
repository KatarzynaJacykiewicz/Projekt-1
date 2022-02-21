const btn = $('.steps button');

btn.on("click", function(){
   
    const divClass = "div." + $(this).attr('class'); 
    $(divClass).addClass("active");

    if ($(this).hasClass('step-two')) {
        $('div.step-one, div.step-three, div.step-four').removeClass('active')
    }
        else if ($(this).hasClass('step-three')) {
            $('div.step-one, div.step-two, div.step-four').removeClass('active')
        }
        else if ($(this).hasClass('step-four')){
            $('div.step-one, div.step-two, div.step-three').removeClass('active')
        }
        else if ($(this).hasClass('step-one')){
            $('div.step-four, div.step-two, div.step-three').removeClass('active')
        }
})