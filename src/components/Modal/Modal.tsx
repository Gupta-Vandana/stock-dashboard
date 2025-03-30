import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 12,
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    width: '90%',
    maxWidth: 500,
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

type ModalProps = {
  title?: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  handleClose: () => void;
  open: boolean;
};

export default function Modal(props: ModalProps) {
  const { title, content, footer, handleClose, open } = props;

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      {title && (
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontSize: '1.5rem',
            fontWeight: 600,
            borderBottom: '1px solid #E0E0E0',
          }}
          id="customized-dialog-title"
        >
          {title}
        </DialogTitle>
      )}

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        <Typography variant="body1" color="text.secondary">
          {content}
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          padding: '8px 16px',
          borderTop: '1px solid #E0E0E0',
        }}
      >
        {footer}
      </DialogActions>
    </BootstrapDialog>
  );
}
