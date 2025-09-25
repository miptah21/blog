Dokumen ini memberikan **overview ML lifecycle dan deployment**, serta menekankan pentingnya **MLOps** untuk membangun karier AI yang efektif.


## Takeaways Utama

### 1. Pentingnya MLOps
- Karier AI yang efektif membutuhkan:
  - **Konsep machine learning / deep learning**
  - **Kemampuan production engineering**
- Menggabungkan fondasi ML dengan **software development modern**.

### 2. Lifecycle Proyek ML
Empat tahap utama:
1. **Scoping**
   - Mendefinisikan proyek, metrik, dan sumber daya.
2. **Data**
   - Definisi, labeling, organisasi data.
   - Membuat baseline performa.
3. **Modeling**
   - Memilih dan melatih model.
   - Analisis error untuk perbaikan.
4. **Deployment**
   - Men-deploy, memonitor, dan maintain sistem di production.

### 3. Gap POC ke Production
- Model di **Jupyter Notebook** hanya mewakili **5-10% kode total proyek ML**.
- Deployment memerlukan integrasi software yang lengkap agar model bisa berjalan di dunia nyata.

### 4. Tantangan Deployment
#### a. ML / Statistical Issues
- **Concept drift**: perubahan definisi Y given X.
- **Data drift**: perubahan distribusi X.
- Bisa menurunkan performa model setelah deployment.

#### b. Software Engineering Issues
- Keputusan penting:
  - **Real-time vs batch prediction**
  - **Cloud vs edge/browser deployment**
  - Sumber daya: CPU/GPU/memori
  - Latency & throughput
  - Logging, security, privacy

### 5. Deployment Patterns
- **New Product / Capability**: gradual ramp-up + monitoring.
- **Automate / Assist Manual Task**: shadow mode deployment (ML berjalan paralel, output tidak digunakan untuk keputusan).
- **Replace Previous ML System**: gradual ramp-up + monitoring + rollback.
- **Canary Deployment**: deploy ke sebagian kecil traffic, monitoring, lalu naikkan traffic.
- **Blue-Green Deployment**: old (blue) & new (green) version, switch traffic, mudah rollback.

### 6. Derajat Otomasi
Deployment adalah spektrum:
- Human-only
- Shadow mode / AI assistance
- Partial automation (human-in-the-loop untuk prediksi tidak pasti)
- Full automation

### 7. Monitoring
- Penting untuk tracking **health dan performance sistem**.
- Langkah-langkah:
  - Brainstorm masalah & metrik terkait.
  - Monitor:
    - **Software metrics**: memory, compute, latency, throughput, server load
    - **Input metrics**: avg input length, missing values, brightness
    - **Output metrics**: null output, user redo search, switch to typing
  - Setting threshold & adaptasi metrik seiring waktu
- Modeling & deployment adalah **proses iteratif**.

### 8. Model Maintenance
- Retraining bisa manual atau otomatis (manual lebih umum).
- Monitoring membantu:
  - Menentukan kapan retraining dibutuhkan
  - Analisis error lebih lanjut

### 9. Pipeline Monitoring
- Sistem AI kompleks dengan banyak komponen membutuhkan **monitoring di tiap stage pipeline**.
- Perubahan di satu modul bisa memengaruhi modul lainnya.

### 10. Data Change Rate
- Data user **lebih lambat drift**
- Data enterprise/B2B **lebih cepat berubah**

---

> Kesimpulan: ML production bukan hanya soal model, tapi integrasi end-to-end, monitoring, maintenance, dan deployment pattern yang tepat. MLOps adalah skill kunci untuk membuat ML bisa memberi **nilai bisnis nyata**.


## Lihat Dokumen

Berikut dokumen bisa dibaca langsung di halaman:

<iframe
  src="https://drive.google.com/file/d/1GLhfYWRV2n1KBvu-hdMZtN8oxJpyIRKZ/preview"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
