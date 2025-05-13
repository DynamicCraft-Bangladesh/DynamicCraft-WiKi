# ⚔️ Guilds Plugin - Proxy Mode Setup Guide

> **⚠️ Proxy Mode Requires REDIS and a MySQL or MongoDB Database**

If you do **not** have a Redis server, you can run the plugin in **standalone mode** without proxy features.

---

## 📥 Installation Steps (Proxy Mode)

1. **Download the Plugin**
   - Get the latest version from:
     - [SpigotMC](https://www.spigotmc.org/)
     - [Polymart](https://polymart.org/)
     - [BuiltByBit](https://builtbybit.com/)

2. **Install on All Servers**
   - Place the `.jar` file in the `plugins` folder of your **Proxy** and **all Spigot servers**.

3. **Restart Servers**
   - Restart both the Proxy and all Spigot servers.

4. **Enable BungeeCord Support**
   - In every Spigot server, edit `plugins/Guilds/config.yml`:
     ```yaml
     guilds:
       settings:
         bungeecord:
           enabled: true
     ```

5. **Configure Database**
   - Set MySQL or MongoDB credentials in each Spigot server’s `config.yml`.

6. **Install & Configure Redis**
   - Refer to the [Installing Redis](#redis-installation-guide) section below.

7. **Restart All Servers Again**

8. **🎉 You're Done! Enjoy the Plugin!**

---

## 🧰 Redis Installation Guide

### All Servers on the Same Machine
1. Install Redis on your machine.
2. Set the Redis credentials in each server's `config.yml`.

### Servers on Different Machines
1. Choose **one machine** to host Redis.
2. Install and configure Redis on that machine.
3. Ensure that Redis is **accessible from other machines**.
4. Set credentials in each server’s `config.yml`.

---

### Example Setup

| Machine     | Purpose               | IP Address      |
|-------------|-----------------------|-----------------|
| Machine 1   | Redis Server Host     | `192.168.1.100` |
| Machine 2   | Spigot Server         | `192.168.1.101` |
| Machine 3   | Spigot Server         | `192.168.1.102` |

- **Redis installed on Machine 1**
- All other machines connect to Redis at `192.168.1.100`

#### Sample Redis Configuration (`config.yml` on all servers):
```yaml
redis:
  host: 192.168.1.100
  port: 6379
  username: ''
  password: 'Your_Password'

guilds:
  settings:
    bungeecord:
      enabled: true
