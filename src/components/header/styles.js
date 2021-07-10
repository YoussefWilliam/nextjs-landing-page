export const mobileDrawerStyles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};

export const headerStyles = {
    header: {
      color: "text",
      fontWeight: "body",
      py: 4,
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "transparent",
      transition: "all 0.4s ease",
      ".donate__btn": {
        flexShrink: 0,
        mr: [15, 20, null, null, 0],
        ml: ["auto", null, null, null, 0],
      },
      "&.sticky": {
        position: "fixed",
        backgroundColor: "background",
        color: "#000000",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
        py: 3,
        "nev > a": {
          color: "text",
        },
      },
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nav: {
      mx: "auto",
      display: "none",
      "@media screen and (min-width: 1024px)": {
        display: "block",
      },
      a: {
        fontSize: 2,
        fontWeight: "body",
        px: 5,
        cursor: "pointer",
        lineHeight: "1.2",
        transition: "all 0.15s",
        "&:hover": {
          color: "primary",
        },
        "&.active": {
          color: "primary",
        },
      },
    },
  };