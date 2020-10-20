const conv = () =>{
    let cgpa = document.getElementById('cgpa').value;
    let maxcgpa = document.getElementById('maxcgpa').value;
    let mincgpa = document.getElementById('mincgpa').value;
    let obcgpa = 3*(parseFloat(maxcgpa) - parseFloat(cgpa))/(parseFloat(maxcgpa) - parseFloat(mincgpa))+1;
    let grade = "";

    if (obcgpa >=1 && obcgpa <1.60){
        grade = 'Sehr gut';
    }
    else if(obcgpa >=1.60 && obcgpa <2.65){
        grade = 'Gut';
    }
    else if(obcgpa >=2.65 && obcgpa <3.55){
        grade = 'Befriedigend';
    }
    else if(obcgpa >=3.55 && obcgpa <=4.0){
        grade = 'Ausreichend';
    }
    else {
        grade = 'Mangelhaft';
    }
    document.getElementById("fout").innerHTML = `Your Pakistan CGPA ${cgpa} when converted into German grade point system is equivalent to ${obcgpa}, Obtained grade ${grade}`;

}