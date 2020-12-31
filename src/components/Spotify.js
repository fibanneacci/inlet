import React from 'react'
import './Spotify.css'
import { useDrag } from 'react-dnd'

// const Spotify = (props) => {
//     let input = props.url
//     if (input.length != 0) {
//         if (input.includes("episode")) { // podcast
//             let splitIndex = props.url.indexOf(".com")
//             let propsLeft = props.url.substring(0, splitIndex + 5)
//             let propsRight = props.url.substring(splitIndex + 5)
//             return (
//                 <iframe src={"" + propsLeft + "embed-podcast/" + propsRight} style={{ left: props.x - 75, top: props.y }} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
//             );
//         } else { // music
//             let splitIndex = props.url.indexOf(".com")
//             let propsLeft = props.url.substring(0, splitIndex + 5)
//             let propsRight = props.url.substring(splitIndex + 5)
//             return (
//                 <iframe src={"" + propsLeft + "embed/" + propsRight} style={{ left: props.x - 75, top: props.y }} width="300px" height="380px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
//             );
//         }
//     }
// }

// export default Spotify;


function Spotify(props) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: 'spotify' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    let input = props.url
    if (input.length != 0) {
        if (input.includes("episode")) { // podcast
            let splitIndex = props.url.indexOf(".com")
            let propsLeft = props.url.substring(0, splitIndex + 5)
            let propsRight = props.url.substring(splitIndex + 5)
            return (
                <div
                    ref={drag}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        cursor: 'move',
                        backgroundColor: `#000000`,
                        width: `300px`,
                        height: `252px`, // Adjust sizes later
                        left: props.x - 75,
                        top: props.y,
                        position: `absolute`
                    }}
                >
                    <iframe src={"" + propsLeft + "embed-podcast/" + propsRight} style={{ left: `10px`, top: `10px` }} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            );
        } else { // music
            let splitIndex = props.url.indexOf(".com")
            let propsLeft = props.url.substring(0, splitIndex + 5)
            let propsRight = props.url.substring(splitIndex + 5)
            return (
                <div
                    ref={drag}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        cursor: 'move',
                        backgroundColor: `#000000`,
                        width: `270px`,
                        height: `350px`,
                        left: props.x - 75,
                        top: props.y,
                        position: `absolute`
                    }}
                >
                    <iframe src={"" + propsLeft + "embed/" + propsRight} style={{ left: `10px`, top: `10px` }} width="250px" height="330px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            );
        }
    }
}

export default Spotify