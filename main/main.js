let posts;

function getPosts(){
    const title = document.getElementsByClassName("title");
    const id = document.getElementsByClassName("id");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://ec2.istruly.sexy:792/post_list", false);
    xhr.send();

    if(xhr.status === 200){
        alert("조회 성공");
        posts = JSON.parse(xhr.response).posts;     //posts객체를 불러옴
        showPosts(posts);       //showPosts함수 호출
        console.log(posts);

        console.log("http://ec2.istruly.sexy:792/"+title);
        const table = document.getElementById("table");
    }
    else if(xhr.status === 204){
        alert("개시글이 없습니다");
    }
    else if(xhr.status === 403){
        alert("권한이 없습니다");
    }
}

function showPosts(posts) {     
    const tbody = document.getElementById('table-body');
    let storage = localStorage;
    let postId = new Array();
    let i = 0;

    for(let post in posts) {        //for of - 이터러블 객체(반복할 수 있게 하는 객체 ex)array, String..)를 순회할 때 사용, 값을 return함
        const tr = document.createElement("tr");    //tr엘리먼트를 추가
        /*tr.innerHTML = `
           <td>${post.title}</td>
            <td>${post.author}</td>
        `;*/
        tr.innerHTML +=
        "<td>"+"<a href='"+"../post/post.html'>"+i+"\t"+post.title+"</a>"+"</td> <td>"+post.author+"</td>";
        tbody.appendChild(tr);      //appendChild:노드를 노드의 마지막 자식으로 추가
        //노드란? <a></a> / <div></div>같은 것
        
        postId.push(post.postId);
        console.log(postId);
        //storage.setItem("postId",JSON.stringify(postId));
        i++;
    }
    console.log(postId);
    storage.setItem("postId", JSON.stringify(postId));
    console.log(storage.postId);
}

/*function getPostId(index) {     //postid 얻는다
    return posts[index].postId;
}           


//postid 배열에서 분리하는것 물어보기