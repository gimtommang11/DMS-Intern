function checkPost(){
    const postId = JSON.parse(localStorage.getItem("postId"));

    let xhr = new XMLHttpRequest();
    console.log("http://ec2.istruly.sexy:792/post/"+postId[i]);
    
    xhr.open("GET", "http://ec2.istruly.sexy:792/"+postId);
    xhr.send(postId);

    if(xhr.response === 200){
        alert("조회 성공");
        const comments = JSON.parse(xhr.response).comments;
        const author = xhr.response.author;
        const content = xhr.response.content;
        const title = xhr.response.title;

        checkPost(title, content);
        checkComment(comments);
    }
    else if(xhr.response === 204){
        alert("개시글 없음");
    }
    else if(xhr.response === 403){
        alert("권한 없음")
    }
}

function checkPost(title, content){         //post조회   
    let title_ = document.getElementById("title");
    let content_ = document.getElementById("content");

    title_.innerHTML = title;
    content_.innerHTML = content;
}

function checkComment(comments){        //comment조회
    let id = document.getElementsByClassName("id");
    let comment_ = document.getElementsByClassName("comment");

    for(let comment of comments)
}



function postComment(){
    let JWT =localStorage.getItem('JWT');
    const id = document.getElementsByClassName("id");
    const comment = document.getElementsByClassName("comment");

    let xhr = new XMLHttpRequest();

    const mention = {
        id,
        comment
    }
    
    xhr.open("POST", "http://ec2.istruly.sexy:792//comment/");
   
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader('Authorization', "Bearer "+JWT);
    xhr.send(JSON.stringify(mention));

    if(xhr.response === 201){
        alert("댓글 작성 완료");
    }
    else if(xhr.response === 204){
        alert("개시글 없음");
    }
    else if(xhr.response === 403){
        alert("권한 없음");
    }
}