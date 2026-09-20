export const resetCountFromFakeApi = (): Promise<{
    success: boolean, message: string
}> => {
    return  new Promise((resolve,reject) => { 
      setTimeout(() => {
         resolve({
            success: true,
           message: 'Notification count reset successfully',
        });
     //        reject(new Error("Failed to reset notification count"));
        }, 3000); // Simulate a delay of 3 second
  });
};
