using QuizApi.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QuizApi.Controllers
{
    [RoutePrefix("users")]
    public class UsersController : BaseController
    {
        List<User> list = new List<User>();
        [Route("list")]
        public HttpResponseMessage GetCurrent(int version)
        {
            ValidateApiVersionAndState(version);

            list.Add(new User{Id=1, Email = "Carlos@gmail.com", Name = "Carlos", LastName = "Martinez", DayOfBirth = new DateTime(1976, 5, 8), MontlySalary = 5000 });
            list.Add(new User{ Id = 2, Email = "helen@gmail.com", Name = "Helen", LastName = "Mou", DayOfBirth = new DateTime(1986, 12, 25), MontlySalary = 7000 });
            list.Add(new User { Id = 3, Email = "Chris@gmail.com", Name = "Chris", LastName = "Hobbin", DayOfBirth = new DateTime(1972, 1, 25), MontlySalary = 6000 });
            list.Add(new User { Id = 4, Email = "Lina@gmail.com", Name = "Lina", LastName = "Terrifi", DayOfBirth = new DateTime(1989, 3, 7), MontlySalary = 4000 });
            
            return Request.CreateResponse(HttpStatusCode.OK,list);
        }
    }
}
