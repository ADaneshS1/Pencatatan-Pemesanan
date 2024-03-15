export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: true, message: 'mehtod tidak diijinkan' });
    }

    const {namaItem,jumlahItem,harga,status} = req.body

    if (!namaItem || !jumlahItem || !harga || !status) {
        return res.status(400).json({ error: true, message: 'Filed tidak boleh kosong' });
    }

    if (status !== 'cicil' && status !== 'cash') {
        return res.status(400).json({ error: true, message: 'Status hanya boleh diisi "cicil" atau "cash"' });
    }

    return res.status(200).json({ success: true, message: 'Data berhasil disimpan' });
}
