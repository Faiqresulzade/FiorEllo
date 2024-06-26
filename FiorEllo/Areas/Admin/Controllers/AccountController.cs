﻿using FiorEllo.Areas.Admin.ViewModels.Account;
using FiorEllo.Constants;
using FiorEllo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FiorEllo.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountController(UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
           _userManager = userManager;
           _signInManager = signInManager;
        }
        public IActionResult Login()
        {
            return View();
        }
        public async Task<IActionResult>Login(AccountLoginViewModel model)
        {
            if(!ModelState.IsValid)return View(model);
            var user = await _userManager.FindByNameAsync(model.Username);
            if (user == null)
            {
                ModelState.AddModelError(string.Empty, "UserName or Password is incorrect!!");
                return View(model);
            }
            if(!await _userManager.IsInRoleAsync(user, UserRoles.Admin.ToString()))
            {
                ModelState.AddModelError(String.Empty, "UserName or Password is incorrect!!");
                return View(model);

            }
            var result = await _signInManager.PasswordSignInAsync(user, model.Password, false, false);
            if (!result.Succeeded)
            {
                ModelState.AddModelError(String.Empty, "UserName or Password is incorrect!!");
                return View(model);
            }
            return RedirectToAction("index", "dashboard");
        }
    }
}
