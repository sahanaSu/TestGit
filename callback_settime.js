const Posts = [
    { title : 'post one' , body : 'this is post one'},
    { title : 'post two' , body : 'this is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = ' ';
        Posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}
function createPost(post){
    setTimeout(() => {
        Posts.push(post);
        callback();
    },2000);
}

function create4thPost(post,callback){
    setTimeout(() => {
        Posts.push(post);
        callback();
    },1000);
}


createPost({title:'post three' , body:'this is post three'});
getPosts();

