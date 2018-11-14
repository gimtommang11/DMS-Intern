function signup(){
    const id = document.getElementById("id").value;
    const password = document.getElementById("pw").value;
    const singupbtn = document.getElementById("signUpbtn")

    console.log(id);
    console.log(password);

    const xhr = new XMLHttpRequest();

    const data = {
        id,
        password
    };

    xhr.open('POST', 'http://ec2.istruly.sexy:792/signup',false);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(data));
    console.log(xhr.status);

    if(xhr.status === 201){
        console.log("가입에 성공하였습니다");
        alert("가입 성공"); 
        location.href="../main/main.html";
    }
    else if(xhr.status === 204){
        console.log("중복 ID");
        alert("중복 ID입니다");
    }
}