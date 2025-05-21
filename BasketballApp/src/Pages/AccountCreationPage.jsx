function AccountCreationPage(){
    return <div className="AccountCreation">
        <h2>Input Mail</h2>
        <input type = "text" 
            placeholder="Mail" 
            className="search-input"/>
        <h2>Input Username</h2>
        <input type = "text" 
            placeholder="Username" 
            className="search-input"/>
        <h2>Input Passwoerd</h2>
        <input type = "text" 
            placeholder="Password" 
            className="search-input"/>
            <input type = "text" 
            placeholder="Just to Double check again" 
            className="search-input"/>
    </div>
}
export default AccountCreationPage