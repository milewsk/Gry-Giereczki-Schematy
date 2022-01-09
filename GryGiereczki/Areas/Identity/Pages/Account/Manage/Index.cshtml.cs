using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using GryGiereczki.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace GryGiereczki.Areas.Identity.Pages.Account.Manage
{
    public partial class IndexModel : PageModel
    {
        private readonly GryGiereczki.Data.ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public IndexModel(
            GryGiereczki.Data.ApplicationDbContext context,
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public string Username { get; set; }

        [TempData]
        public string StatusMessage { get; set; }

        [BindProperty]
        public InputModel Input { get; set; }

        public class InputModel
        {
            [Required]
            [StringLength(30, ErrorMessage = "{0} musi mieć co najmniej {2} i maksymalnie {1} znaków.", MinimumLength = 2)]
            [Display(Name = "Imię")]
            public string Name { get; set; }

            [Required]
            [StringLength(30, ErrorMessage = "{0} musi mieć co najmniej {2} i maksymalnie {1} znaków.", MinimumLength = 2)]
            [Display(Name = "Nazwisko")]

            public string Lastname { get; set; }
            [Display(Name = "Zdjęcie")]
            public string Avatar { get; set; }

            [Display(Name = "Opis")]
            [StringLength(200, ErrorMessage = "{0} musi mieć co najmniej {2} i maksymalnie {1} znaków.", MinimumLength = 1)]

            public string Description { get; set; }
        }

        private async Task LoadAsync(IdentityUser user)
        {
            User _user = (User)(from u in _context.Users
                         where u.Id == user.Id
                         select u).FirstOrDefault();
            Username = await _userManager.GetUserNameAsync(user);
            Input = new InputModel
            {
                Name = _user.Name,
                Lastname = _user.Lastname,
                Avatar = _user.Avatar,
                Description = _user.Description
            };
        }

        public async Task<IActionResult> OnGetAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            await LoadAsync(user);
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            User _user = (User)(from u in _context.Users
                                where u.Id == user.Id
                                select u).FirstOrDefault();
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            if (!ModelState.IsValid)
            {
                await LoadAsync(user);
                return Page();
            }
            _user.Name = Input.Name;
            _user.Lastname = Input.Lastname;
            _user.Avatar = Input.Avatar;
            _user.Description = Input.Description;

            _context.Attach(_user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_user == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            await _signInManager.RefreshSignInAsync(user);
            StatusMessage = "Zapisano zmiany";
            return RedirectToPage();
        }
    }
   
}
