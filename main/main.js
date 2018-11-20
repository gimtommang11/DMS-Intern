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
    for(let post of posts) {        //for of - 이터러블 객체(반복할 수 있게 하는 객체 ex)array, String..)를 순회할 때 사용, 값을 return함
        const tr = document.createElement("tr");    //tr엘리먼트를 추가
        tr.herf = "../post./post.html";
        /*tr.innerHTML = `
           <td>${post.title}</td>
            <td>${post.author}</td>
        `;*/
        tr.innerHTML += /*"<td>" +post.title+ "</td>";*/"<td>"+"<a href='"+"../post/post.html"+"'>"+post.title+"</a>"+"</td>"   //+"<a href='"+post.title+"'>Google</a>";
        tbody.appendChild(tr);      //appendChild:노드를 노드의 마지막 자식으로 추가
        //노드란? <a></a> / <div></div>같은 것
    }
}

function getPostId(index) {     //postid 얻는다
    return posts[index].postId;
}           

/*let storage = localStorage;
        storage.setItem('postId', post.postId);
        console.log(postId);*/