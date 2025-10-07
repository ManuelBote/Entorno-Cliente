import os
import shutil
import subprocess
import filecmp
from pathlib import Path
from datetime import datetime

# ======================================================
# 🔧 CONFIGURACIÓN
# ======================================================

# Ruta del proyecto que quieres respaldar
RUTA_PROYECTO = Path(r"C:\Users\manub\Desktop\Entorno-Cliente")

# Tipo de copia: "github" o "carpeta"
MODO = "github"   

# Si el modo es "carpeta", define la ruta destino
RUTA_DESTINO = Path(r"\\NAS\Backups\Proyecto1")  # o "D:/Backups/Proyecto1"

# ======================================================
# 🧠 FUNCIONES AUXILIARES
# ======================================================

def log(msg):
    hora = datetime.now().strftime("[%Y-%m-%d %H:%M:%S]")
    print(f"{hora} {msg}")

def archivos_diferentes(src, dst):
    """Devuelve True si el archivo no existe en destino o ha cambiado."""
    if not dst.exists():
        return True
    return not filecmp.cmp(src, dst, shallow=False)

# ======================================================
# 💾 MODO 1: COPIA LOCAL / NAS
# ======================================================

def backup_carpeta(origen: Path, destino: Path):
    log(f"Iniciando copia incremental de {origen} a {destino}")
    for carpeta, _, archivos in os.walk(origen):
        carpeta_rel = Path(carpeta).relative_to(origen)
        carpeta_dest = destino / carpeta_rel
        carpeta_dest.mkdir(parents=True, exist_ok=True)

        for archivo in archivos:
            src = Path(carpeta) / archivo
            dst = carpeta_dest / archivo
            if archivos_diferentes(src, dst):
                shutil.copy2(src, dst)
                log(f"Copiado: {src} → {dst}")
            else:
                log(f"Omitido (sin cambios): {src}")

    log("✅ Copia local completada.")

# ======================================================
# ☁️ MODO 2: COPIA HACIA GITHUB
# ======================================================

def backup_github(repo_path: Path):
    if not (repo_path / ".git").exists():
        log("⚠️ La carpeta seleccionada no es un repositorio Git.")
        return

    log(f"Iniciando backup del repositorio en GitHub: {repo_path}")
    try:
        subprocess.run(["git", "-C", str(repo_path), "add", "."], check=True)
        subprocess.run(["git", "-C", str(repo_path), "commit", "-m", "Backup automático"], check=False)
        subprocess.run(["git", "-C", str(repo_path), "push"], check=True)
        log("✅ Repositorio actualizado correctamente en GitHub.")
    except subprocess.CalledProcessError:
        log("⚠️ Error durante el proceso de push hacia GitHub.")

# ======================================================
# 🚀 PROGRAMA PRINCIPAL
# ======================================================

if __name__ == "__main__":
    log("=== INICIO DE BACKUP ===")
    if MODO.lower() == "github":
        backup_github(RUTA_PROYECTO)
    elif MODO.lower() == "carpeta":
        backup_carpeta(RUTA_PROYECTO, RUTA_DESTINO)
    else:
        log("⚠️ Modo inválido. Usa 'github' o 'carpeta'.")
    log("=== FIN DEL PROCESO ===")
