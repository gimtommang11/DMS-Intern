function logIn(){
    const id = document.getElementById("id").value;
    const password = document.getElementById("pw").value;
    const singupbtn = document.getElementById("signupbtn");

    console.log(id , pw);

    let xhr = new XMLHttpRequest();
    
    const parameters = {
        id,
        password
    };

    xhr.open("POST", "http://ec2.istruly.sexy:792/login", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(parameters));

    if(xhr.status === 200){
        alert("로그인이 성공하엿습니다");
    }
    else if(xhr.status === 401){
        alert("로그인에 실피하였습니다");
    }

}