import PropTypes from 'prop-types'; 
import Button from './Button';

// E.g two
// const Header = () => {
//     return (
//         <header>
//            <h1>Task Tracker</h1> 
//         </header>
//     ) 
// }
 
// export default Header

// E.g four
// const Header = (props) => {
//     return (
//          <header>
//             <h1>{props.title}</h1>
//         </header> 
//     )
// }

// Header.defautProps = { 
//     title: 'Task Tracker', 
// }  
// export default Header

// E.g five  --Destructuring. 
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />
            <Button color='blue' text= 'Add' onClick= {onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


// Showing inline css
// const Header = ({ title }) => {
//     return (
//         <header>
//             <h1 style = {{ color: 'red', backgroundColor: 'black' }} > {title} </h1>
//         </header>
//     )
// }

// this shows css in js
// const Header = ({ title }) => {
//     return (
//         <header>
//             <h1 style= {headingStyle} > {title} </h1>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title: 'Task Tracker',
// }

// To make your code more robust and catch errors
// Header.PropTypes = {
//     title: PropTypes.string,
// }


// If it is required
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js. if you don't want to do inline css
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
