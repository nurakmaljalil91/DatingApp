namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; } // use capital case instead lowercase cause we'll use Microsoft Identity later
    }
}