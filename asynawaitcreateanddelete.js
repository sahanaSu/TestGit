const posts = [
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
]

const getposts = async () => {
    const deletePost = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('deletepost');
        },3000)
    });

    let deletepost = await deletePost;
    if(Posts.length > 0){
        setTimeout(() => {
            resolve();
        }, 1000);
    }else{
         reject("error: Array is empty");
    }

    
    return deletepost;
}
