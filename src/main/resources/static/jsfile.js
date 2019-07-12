var hi = [];




function contains ()
{
    v = document.getElementById("command").value;
    document.getElementById("command").value = "";

    skill = document.getElementById("test").innerText;

    if(skill.includes(v) == true)
    {
        alert("hi")
    }
}
function append(x)
{
    hi.push(x);
    alert(hi);
}
