/* Mobile nav behavior */
@media (max-width: 767px) {
  .nav-links {
    position: absolute;
    top: 70px;
    right: 20px;
    background: #fff;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border-radius: 10px;
    display: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }
}
