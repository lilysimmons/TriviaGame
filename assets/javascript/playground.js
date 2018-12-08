var people = [
    {name: "Sally", favoriteColor: "black"},
    {name: "Bob", favoriteColor: "purple"},
    {name: "Jim", favoriteColor: "pink"}
]



function writeNames(){
    //loop through people array
    for(var i; i < people.length; i++){
        var person = people[i];
        console.log(person.name)
    }
}

function displayNames()
{
    //add a pTag for each person in the playground div
    for ( var i= 0 ; i <people.length; i++)
    {
        var person = people[i];
        var html= "<p class='nameP' data-color = " + person.favoriteColor + ">" + person.name + "</p>";
        $("#playground").append(html);
    }
}

$("#playground").on("click",".nameP",function(){
    var color = $(this).attr("data-color");
    alert("Favorite Color: " + color);
})

displayNames();