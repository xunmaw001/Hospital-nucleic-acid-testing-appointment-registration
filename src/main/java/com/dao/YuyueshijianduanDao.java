package com.dao;

import com.entity.YuyueshijianduanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.YuyueshijianduanVO;
import com.entity.view.YuyueshijianduanView;


/**
 * 预约时间段
 * 
 * @author 
 * @email 
 * @date 2022-01-21 11:08:10
 */
public interface YuyueshijianduanDao extends BaseMapper<YuyueshijianduanEntity> {
	
	List<YuyueshijianduanVO> selectListVO(@Param("ew") Wrapper<YuyueshijianduanEntity> wrapper);
	
	YuyueshijianduanVO selectVO(@Param("ew") Wrapper<YuyueshijianduanEntity> wrapper);
	
	List<YuyueshijianduanView> selectListView(@Param("ew") Wrapper<YuyueshijianduanEntity> wrapper);

	List<YuyueshijianduanView> selectListView(Pagination page,@Param("ew") Wrapper<YuyueshijianduanEntity> wrapper);
	
	YuyueshijianduanView selectView(@Param("ew") Wrapper<YuyueshijianduanEntity> wrapper);
	

}
