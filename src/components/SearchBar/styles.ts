export const searchContainer = {
  p: "2px 4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 400,
  border: "2px solid #c13e3e",
  borderRadius: "15px"
};

export const searchInput = {
  marginLeft: 1,
  flex: 1,
  height: "60px",
  fontSize: "20px"
};

export const searchButton = {
  p: "10px",
  ":hover": {
    backgroundColor: "transparent"
  }
};

export const searchStyle = {
  color: "#d32f2f",
  ":hover": {
    transform: "scale(1.5)",
    transition: "transform .2s"
  },
  ":active": {
    transform: "scale(1)",
    transition: "transform .2s"
  }
};
