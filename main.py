import decky  # type: ignore


class Plugin:
    """
    Hercules Codes – no backend logic needed.
    This stub satisfies Decky Loader's requirement for main.py.
    """

    async def _main(self) -> None:
        decky.logger.info("Hercules Codes plugin loaded.")

    async def _unload(self) -> None:
        decky.logger.info("Hercules Codes plugin unloaded.")
