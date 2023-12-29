import "./RenderTest.css"

function RenderTest() {
    let text = 0;

    return (
        <button className="spinMe" onClick={() => text++}>
            clickMePLS{text}
        </button>
    )
}

export default RenderTest;