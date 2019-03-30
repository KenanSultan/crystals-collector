var win = 0
var lose = 0

function new_game() {
    $("#total").text("?")
    $("#wins").text(win)
    $("#loses").text(lose)
    // Random number between 20 - 60
    goal_number = Math.floor(Math.random()*20)+41
    $("#goal").text(goal_number)
    crystal_numbers = []
    total = 0

    while(crystal_numbers.length < 4) {
        // Random number between 2 - 20
        let crystal_num = Math.floor(Math.random()*11)+2
    
        if(crystal_numbers.indexOf(crystal_num) === -1) {
            crystal_numbers.push(crystal_num)
        }         
    }
    for (i in crystal_numbers) {
        let id = "#resim" + (parseInt(i) + 1)
        $(id).attr("data-num",crystal_numbers[i])
    }
}

$(".resim").on({
    click: function() {
        let value = $(this).attr("data-num")
        total += parseInt(value)
        $("#total").text(total)
        if (total === goal_number){
            win++
            $("#result").text("You Won!")
            new_game()
        }else if (total>goal_number) {
            lose++
            $("#result").text("You Lose!")
            new_game()
        }
    }
})

new_game()
