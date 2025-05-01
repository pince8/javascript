//Asenkron Problemi

//http istekleri

const users=[
    {
        userId:5,
        post:"Enes Post "
    },

    {
        userId:5,
        post:"Enes Post 2"
    },

    {
        userId:5,
        post:"Enes Post 3"
    },
    {
        userId :6,
        post:"Ali Post 1"
    },
    {
        userId: 7,
        post:"Betül Post 1"
    }
]
//Senkrona çeviricez.
//callback - promise - async await
function getUserId(callback){
    setTimeout(()=>{
        //servise gittik cevap aldık.
        let userId=5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId,callback){
    console.log(userId);
    //Gerçek bir rest api ya istek atacaksınız.
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
        
    }, 500);
}

getUserId(getPostByUserId);
/*
getUserId((userId)=>{
    getPostByUserId(userId,(userPost)=>{
        console.log(userId, userPost);
    })
})
*/

/*
let userId= getUserId();
getPostByUserId(userId);*/