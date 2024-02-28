export function Card(props){
    return <div style={styles.card}>
        <h1 style={styles.name}>{props.name}</h1>
        <p style={styles.description}>{props.description}</p>
        <h2><b>Interests</b></h2>
        <ul style={styles.interestsList}>
            {props.interests.map( (interest)=>(
                <li style={styles.interestItem}>{interest}</li>
            ))}
        </ul>
        <a href={props.linkedin} style={styles.link}>Linkedin</a>
    </div>
}

//Styling
const styles = {
    card:{
        border: '1px solid #d2d9db',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    link: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#007BFF', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      },
      name: {
        fontSize: '30px',
        marginBottom: '10px',
        color: '#333',
      },
      description: {
        fontSize: '20px',
        marginBottom: '10px',
        color: '#333',
      },
      interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      },
      interestItem: {
        fontSize: '18px',
        marginBottom: '5px',
        color: '#555',
      }
}