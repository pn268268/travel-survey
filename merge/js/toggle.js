function showArea(area) {
    document.getElementById("area0").style.display = "none";
    document.getElementById("area1").style.display = "none";
    document.getElementById("area2").style.display = "none"; 
    document.getElementById("area3").style.display = "none";
    document.getElementById("finish").style.display = "none";

    document.getElementById(area).style.display = "block";
}