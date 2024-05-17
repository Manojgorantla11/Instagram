const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
     {
        name: "Elon Musk",
        username: "Elo4",
        location: "South Africa, Africa",
        avatar: "images/Elon.jpg",
        post: "images/Elonpic.webp",
        comment: "Lets go electric ⚡️ ",
        likes: 152000
    }
]

let mainEl = document.getElementById("main")
let html = ""

for (let i = 0; i < posts.length; i++){
  html += `
            <img class="dp" src="${posts[i].avatar}">
            <div class="display-name">
                <h4> ${posts[i].name} </h4>
                <h6> ${posts[i].location}</h6>
            </div>
            <img  class="post" src="${posts[i].post}">
            <div class="share">
                <img class="heart" src="images/icon-heart.png">
                <img src="images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>
                <p> <span class="likes-count"> ${posts[i].likes} Likes </span></p>
                <p> <span class="likes-count">${posts[i].username}  </span>  ${posts[i].comment}</p>  `
        }
        
mainEl.innerHTML = html