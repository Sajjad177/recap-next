
const UserDetails = async({params}: {params: Promise<{id: string}>}) =>{
    const {id} = await params;

  return (
    <div>
      this is the User Details component for user {id}
    </div>
  )
}

export default UserDetails

