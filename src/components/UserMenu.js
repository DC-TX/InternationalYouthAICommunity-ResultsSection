import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UserMenu({ setCurrentPage }) {
  const [open, setOpen] = useState(false);
  const { user, profile, firebaseConfigured, signInWithGitHub, signOutUser } = useAuth();

  const displayName = profile?.username || user?.displayName || "李明远";
  const handle = profile?.handle || profile?.githubAccount || user?.reloadUserInfo?.screenName || "liming-ai";
  const avatar = profile?.avatar || user?.photoURL || "李";

  function goProfile() {
    if (typeof setCurrentPage === "function") {
      setCurrentPage("profile");
      setOpen(false);
    }
  }

  async function handleSignIn() {
    await signInWithGitHub();
    setOpen(false);
  }

  async function handleSignOut() {
    if (!firebaseConfigured) {
      alert("当前为静态 Demo，暂未接入真实登出系统。");
      setOpen(false);
      return;
    }

    await signOutUser();
    setOpen(false);
  }

  if (firebaseConfigured && !user) {
    return (
      <button type="button" onClick={handleSignIn} className="academy-login-btn">
        GitHub 登录
      </button>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="打开用户菜单"
        onClick={() => setOpen(prev => !prev)}
        className="academy-user-button"
      >
        {user?.photoURL && !profile?.avatar ? (
          <img
            src={user.photoURL}
            alt=""
            className="h-9 w-9 rounded-[10px] object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="academy-user-avatar">
            {String(avatar).slice(0, 1)}
          </div>
        )}

        <div className="hidden text-left md:block">
          <p>{displayName}</p>
          <span>@{handle}</span>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-3">
          <div role="menu" className="academy-user-dropdown">
            <button type="button" role="menuitem" onClick={goProfile}>
              我的主页
            </button>

            <button type="button" role="menuitem" onClick={handleSignOut} className="danger">
              登出
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
