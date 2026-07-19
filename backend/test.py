import asyncio
import asyncpg

async def main():
    try:
        conn = await asyncpg.connect("postgresql://postgres:yourpassword@localhost:5432/amrutam")
        print("Success!")
        await conn.close()
    except Exception as e:
        print(f"Error: {e}")

asyncio.run(main())
