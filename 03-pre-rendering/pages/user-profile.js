export default function UserProfile(props) {
  return (
    <h1>Current user: {props.username}</h1>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      username: 'Max'
    }
  }
} 