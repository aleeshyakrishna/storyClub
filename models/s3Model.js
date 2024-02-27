const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAQ3HR7RPBWVF7CVEO',
  secretAccessKey: 'jiEttjR4rDHqPRefyXeE+4XWfBNFjKh8vmZBDGTJ',
  region: 'ap-south-1',
});

const s3 = new AWS.S3();
const bucketName = 'storyclub';
//sample
module.exports = {
  uploadFile: async (file) => {
    const source = file   
    const sourceBuffer = source.buffer;
    const paramsSource = {
      Bucket: bucketName,
      Key: `storyWriter/${source.originalname}`,
      Body: sourceBuffer,
    };
    const uploadSourcePromise = s3.upload(paramsSource).promise();
    // Wait for  upload to complete
    const sourceResult = await uploadSourcePromise;
    // Return the results of both uploads
    return {      
      source: sourceResult,
    };
  },

  uploadTellings : async(file)=>{

    try {
      // Extract file information from the request
      const { originalname, mimetype, buffer } = file;
  
      // Determine the category based on the mimetype
      let category = '';
      if (mimetype.startsWith('audio/')) {
        category = 'audio';
      } else if (mimetype.startsWith('video/')) {
        category = 'video';
      } else {
        category = 'other'; // Handle other types as needed
      }
  
      // Create the key (file path) based on the category and original file name
      const key = `storyteller/${category}/${originalname}`;
  
      // Prepare the parameters for uploading to S3
      const params = {
        Bucket: bucketName,
        Key: key,
        Body: buffer,
      };
  
      // Upload the file to S3
      const uploadResult = await s3.upload(params).promise();
  return {
    file : uploadResult
  }
      
    } catch (error) {
      console.error('Error uploading file:', error);
    }



}
  //   console.log(file,"thisisssssssssssssssssss");
  //   const fileBuffer = file.buffer
  //   const paramFile = {
  //     Bucket : bucketName,
  //     Key: `storyTellings/${file.originalname}`,
  //     Body: fileBuffer,
  //   };
  //   const uploadFilePromise = s3.upload(paramFile).promise();
  //   const fileResult = await uploadFilePromise;
  //   return {
  //     file : fileResult
  //   }
  // }

};
