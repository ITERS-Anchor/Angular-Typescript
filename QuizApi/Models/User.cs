using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizApi.Models
{
    public class User
    {//Email, Name, LastName, DayOfBirth, MontlySalary
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public DateTime DayOfBirth { get; set; }
        public decimal MontlySalary { get; set; }
    }
}
