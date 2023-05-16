import "../pages/Play.css"

function ArticleBtn(props) {
    return ( <>
        <button 
        style={{
            backgroundColor: props.btnArticle === props.isClicked 
            ? (props.isCorrect ? "green" : "red") 
            : "white" }}
        onClick={() => props.handleClick(props.btnArticle)}>
            {props.btnArticle}
        </button>
    </> );
}

export default ArticleBtn;