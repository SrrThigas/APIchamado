const express = require(express);
const app = express();
const pool = require ('./bd');

app.use (express.json());

app.get('/chamado', async(_, res) => {
    try{
        const chamado = await pool.query('SELECT * FROM tb_chamados');
        res.status(200).json(chamado.rows);
    } catch(err) {
        console.error("Erro em requisitar os chamados", err);
        res.status(500).json({error: 'Erro em requisitar os chamados', err});
    }
});

app.get('/chamado', async (_, res) =>{
    try {
        const chamado = await pool.query ('SELECT * FROM tb_setores');
        res.status(200).json(chamado.rows);
    } catch {
        console.error('Error ao requisitar os Setores', err);
        res.status(500).json({error: 'Error ao requisitar os Setores',err});
    }
});

app.get('/chamado', async(_, res) =>{
    try{
    const chamado = await pool.query('SELECT * FROM tb_status');
    res.status(200).json(chamado.rows)
    } catch {
        console.error('Erro ao requisitar o Status',err);
        res.status(500).json({error: 'Erro ao requisitar o Status', err});
    }
});

app.get('/chamado', async(_, res) => {
    try{
        const chamado = await pool.query('SELECT * FROM tb_usuarios');
        res.status(200).json(chamado.rows);
    } catch {
        console.error('Erro ao requisitar o Usuario')
        res.status(500).json({error:'Error ao requisitar os usuario'})
    }
});

app.post ('/chamado', async (req,res) =>{

    const {id, title, description, date} = req.body;
    try {
        const chamado = await require.query(
            
            'INSERT INTO tb_chamados (id, title, descriptiom, date) VALUES ($1, $2, $3, $4) RETURNING *'
            [id, title, description, date]
        );
        res.status(200).json(chamado.rows[0]);
    } catch (err) {
        console.error('Erro ao requisitar o chamado', err);
        resizeTo.status(500).json({error: 'Error ao requisitar o chamado'});
    }
});

app.post ('/chamado', async (req,res) =>{

    const {id, nome} = req.body;
    try {
        const chamado = await require.query(
            
            'INSERT INTO tb_setores (id, nome) VALUES ($1, $2) RETURNING *'
            [id, title, description, date]
        );
        res.status(200).json(chamado.rows[0]);
    } catch (err) {
        console.error('Erro ao requisitar o chamado', err);
        resizeTo.status(500).json({error: 'Error ao requisitar o chamado'});
    }
});

app.post ('/chamado', async (req,res) =>{

    const {id, aberto, em_andamento, pendente, concluido} = req.body;
    try {
        const chamado = await require.query(
            
            'INSERT INTO tb_status (id, aberto, em_andamento, pendente, concluido) VALUES ($1, $2, $3, $4, $5) RETURNING *'
            [id, aberto, em_andamento, pendente, concluido]
        );
        res.status(200).json(chamado.rows[0]);
    } catch (err) {
        console.error('Erro ao requisitar o chamado', err);
        resizeTo.status(500).json({error: 'Error ao requisitar o chamado'});
    }
});

app.post ('/chamado', async (req,res) =>{

    const {id, nome} = req.body;
    try {
        const chamado = await require.query(
            
            'INSERT INTO tb_usuario (id, nome) VALUES ($1, $2) RETURNING *'
            [id, nome]
        );
        res.status(200).json(chamado.rows[0]);
    } catch (err) {
        console.error('Erro ao requisitar o chamado', err);
        resizeTo.status(500).json({error: 'Error ao requisitar o chamado'});
    }
});
