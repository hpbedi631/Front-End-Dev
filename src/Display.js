const Display = () => {
    let likeArr = ["Like!", "Like!", "Like!", "Like!","Like!","Like!","Like!","Like!","Like!"];
    return likeArr.map((i) => {
        return <button>{i}</button>
        
    });
}
 
export default Display;