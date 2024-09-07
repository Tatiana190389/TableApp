import { Box, CircularProgress } from '@mui/material';

export default function CircularProgressBar() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
}
