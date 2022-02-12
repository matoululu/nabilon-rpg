class Helper {
  sendResponse(content, isUser = false, isNote = false) {
    const responseEvent = new CustomEvent('text:response', {
      detail: {
        content,
        isUser,
        isNote
      },
      bubbles: true,
    });

    document.documentElement.dispatchEvent(responseEvent);
  }
}
