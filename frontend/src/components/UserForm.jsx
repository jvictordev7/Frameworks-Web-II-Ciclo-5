import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const UserForm = ({ onSave, editingUser, onCancelEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name || '');
      setEmail(editingUser.email || '');
      return;
    }
    setName('');
    setEmail('');
  }, [editingUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      name,
      email,
      ...(editingUser?.id ? { id: editingUser.id } : {}),
    };
    onSave(payload);
  };

  const isEditing = Boolean(editingUser);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" component="h2" className="section-title">
        {isEditing ? 'Editar Usuário' : 'Novo Cadastro'}
      </Typography>

      <TextField
        label="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        fullWidth
      />

      <Stack direction="row" spacing={2} justifyContent="flex-end">
        {isEditing && (
          <Button variant="outlined" color="inherit" onClick={onCancelEdit}>
            Cancelar
          </Button>
        )}
        <Button type="submit" variant="contained" className="cta-btn">
          {isEditing ? 'Salvar Alterações' : 'Cadastrar Usuário'}
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
