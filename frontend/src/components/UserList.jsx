import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const UserList = ({ users = [], onEdit, onDelete }) => (
  <Box
    sx={{
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    <Box>
      <Typography variant="h6" component="h2" className="section-title">
        Listagem de Membros
      </Typography>
      <Typography variant="body2" className="muted">
        Total de registros: {users.length.toString().padStart(2, '0')}
      </Typography>
    </Box>

    {users.length === 0 ? (
      <Typography className="muted">
        Nenhum usuário por aqui ainda. Comece criando um novo cadastro.
      </Typography>
    ) : (
      <Table size="small">
        <TableHead className="table-head">
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome do Usuário</TableCell>
            <TableCell>Contato (Email)</TableCell>
            <TableCell align="right">Gerenciar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="table-row">
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => onEdit(user)}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => onDelete(user.id)}
                >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )}
  </Box>
);

export default UserList;
