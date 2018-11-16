function writing(){
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    console.log(title, content);

    let xhr= new XMLHttpRequest();
    
    let post = {
        title,
        content
    };


    xhr.open("POST", "http://ec2.istruly.sexy:792/post/1234", false);
    
    let JWT =localStorage.getItem('JWT');

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', "Bearer "+JWT);

    xhr.send(JSON.stringify(post));

    
    if(xhr.status ===201){
        alert("개시글 작성 완료되었습니다");
    }
    else if(xhr.status === 204)
    {
        alert("개시글이 없습니다");
    }
    else if(xhr.status === 403){
        allert("권한이 없습니다");
    }
}