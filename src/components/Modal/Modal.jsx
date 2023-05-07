import React, { useState } from "react";
import useFormatMessage from "~/hooks/useFormatMessage";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

function Modal({
  dialogOpen,
  setDialogOpen,
  buttonName,
  buttonVariant = "contained",
  click,
  disabled,
  modalTitle,
  modalSize = "750px",
  saveClick,
  cancelClick,
  saveButton = true,
  extendable = false,
  setExpandMore,
  children,
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    if (dialogOpen === false) setDialogOpen(true);
    else setOpen(true);

    if (click) click();
    setScroll(scrollType);
  };

  const handleClose = () => {
    if (dialogOpen) {
      setDialogOpen(false);
    } else {
      setOpen(false);
    }
  };

  const expandModal = () => {
    setExpand((prevState) => !prevState);
    setExpandMore((prevState) => !prevState);
  };

  let buttonContent;
  switch (buttonName) {
    case "language":
      buttonContent = (
        <IconButton onClick={handleClickOpen("paper")} disabled={disabled}>
          <LanguageIcon fontSize="inherit" />
        </IconButton>
      );
      break;

    case "settings":
      buttonContent = (
        <IconButton onClick={handleClickOpen("paper")} disabled={disabled}>
          <SettingsIcon fontSize="inherit" />
        </IconButton>
      );
      break;

    case "none":
      buttonContent = <></>;
      break;

    default:
      buttonContent = (
        <Button variant={buttonVariant} onClick={handleClickOpen("paper")} size="large" style={{ marginTop: "2%" }} disabled={disabled}>
          {useFormatMessage(buttonName)}
        </Button>
      );
      break;
  }

  return (
    <>
      {buttonContent}

      <Dialog
        open={dialogOpen ?? open}
        // onClose={handleClose}
        scroll={scroll}
        fullWidth
        sx={{ "& .MuiPaper-root": { maxWidth: modalSize } }}
      >
        <Grid container justify="space-between" alignItems="center">
          <DialogTitle>{useFormatMessage(modalTitle)}</DialogTitle>
        </Grid>
        <DialogContent dividers={scroll === "paper"}>{children}</DialogContent>

        <DialogActions sx={{ pr: 2.5, pt: 2.5 }}>
          {extendable && (
            <>
              <Grid justify="flex-start">
                <Button className="btn" onClick={expandModal}>
                  {expand ? useFormatMessage("show-less") : useFormatMessage("show-more")}
                </Button>
              </Grid>
              <div style={{ flex: "1 0 0" }} />
            </>
          )}

          <Button
            id="ModalCancelButton"
            sx={{ color: theme.palette.grey[500] }}
            onClick={() => {
              cancelClick && cancelClick();
              handleClose();
            }}
          >
            {useFormatMessage("cancel")}
          </Button>

          {saveButton && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                saveClick && saveClick();
                handleClose();
              }}
            >
              {useFormatMessage("okey")}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;
