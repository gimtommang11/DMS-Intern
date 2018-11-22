function patchPost(){

    const JWT = localStorage.getItem('JWT');
    const postId = localStorage.getItem('postId');
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    const parameter = {
        title,
        content
    };

    console.log(parameter);

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://ec2.istruly.sexy:792/post/"+postId,false);
    xhr.setRequestHeader("Authorization", "Bearer "+JWT);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(parameter));

    if(xhr.status === 201){
        alert("개시글 수정 완료");
        location.href = "../post/post.html";
    }
    else if(xhr.status === 204){
        alert("개시글 없음");
    }
    else if(xhr.status === 403){
        alert("권한 없음");
    }
}